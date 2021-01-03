import {ConsoleSpanExporter, SimpleSpanProcessor} from '@opentelemetry/tracing';
import {WebTracerProvider} from '@opentelemetry/web';
import {XMLHttpRequestPlugin} from '@opentelemetry/plugin-xml-http-request';
import {UserInteractionPlugin} from '@opentelemetry/plugin-user-interaction';
import {ZoneContextManager} from '@opentelemetry/context-zone';
import {CollectorTraceExporter} from '@opentelemetry/exporter-collector';
import {B3Propagator, HttpTraceContext, TRACE_PARENT_HEADER} from '@opentelemetry/core';
import {context, propagation} from '@opentelemetry/api';
import {DocumentLoad} from '@opentelemetry/plugin-document-load';

const w3cPropagator = new HttpTraceContext()

const providerWithZone = new WebTracerProvider({
    plugins: [
        new DocumentLoad(),
        new UserInteractionPlugin(),
        new XMLHttpRequestPlugin({
                ignoreUrls: [/localhost/],
                propagateTraceHeaderCorsUrls: [
                    'http://localhost:8080'
                ]
            }
        )
    ]
});

// providerWithZone.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
providerWithZone.addSpanProcessor(new SimpleSpanProcessor(new CollectorTraceExporter()));

providerWithZone.register({
    contextManager: new ZoneContextManager(),
    propagator: w3cPropagator,
});

const tracer = providerWithZone.getTracer('treactor');

let lastButtonId = 0;

function btnAddClick() {
    lastButtonId++;
    const btn = document.createElement('button');
    // for easier testing of element xpath
    let navigate = false;
    if (lastButtonId % 2 === 0) {
        btn.setAttribute('id', `button${lastButtonId}`);
        navigate = true;
    }
    btn.setAttribute('class', `buttonClass${lastButtonId}`);
    btn.append(document.createTextNode(`Click ${lastButtonId}`));
    btn.addEventListener('click', onClick.bind(this, navigate));
    document.querySelector('#buttons').append(btn);
}


function prepareClickEvents() {

    const metaElement = [...document.getElementsByTagName('meta')].find(
        e => e.getAttribute('name') === TRACE_PARENT_HEADER
    );
    const traceParent = (metaElement && metaElement.content) || '';
    const tp = traceParent.split("-")
    const span1 = tracer.startSpan('Alex was in Javascript!', {
        parent: {
            traceId: tp[1],
            spanId: tp[2]
        }
    });

    for (let i = 0; i < 5; i++) {
        btnAddClick();
    }
    const btnAdd = document.getElementById('btnAdd');
    btnAdd.addEventListener('click', btnAddClick);

    tracer.withSpan(span1, () => {
        tracer.getCurrentSpan().addEvent("starting some data download")
        const span = tracer.startSpan("callingData")
        getData('/treact/atom?symbol=H').then(() => {
            console.log('data downloaded 2');
        });
    })


    span1.end();
}

function onClick(navigate) {
    if (navigate) {
        history.pushState({test: 'testing'}, '', `${location.pathname}`);
        history.pushState({test: 'testing'}, '', `${location.pathname}#foo=bar1`);
    }
    getData('https://httpbin.org/get?a=1').then(() => {
        getData('https://httpbin.org/get?a=1').then(() => {
            console.log('data downloaded 2');
        });
        getData('https://httpbin.org/get?a=1').then(() => {
            console.log('data downloaded 3');
        });
        console.log('data downloaded 1');
    });
}

function getData(url, resolve) {
    return new Promise(async (resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.setRequestHeader('Accept', 'application/json');
        req.send();
        req.onload = function () {
            resolve();
        };
    });
}

window.addEventListener('load', prepareClickEvents);