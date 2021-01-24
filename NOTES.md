

```shell
protoc --java_out=src/main/java \
    --proto_path ../treactor-proto \
    --experimental_allow_proto3_optional \
    io/treactor/v1alpha/atom.proto \
    io/treactor/v1alpha/node.proto
```

