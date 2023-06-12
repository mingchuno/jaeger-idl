// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2021 The Jaeger Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('grpc');
var api_v3_query_service_pb = require('../api_v3/query_service_pb.js');
var opentelemetry_proto_trace_v1_trace_pb = require('../opentelemetry/proto/trace/v1/trace_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');

function serialize_jaeger_api_v3_FindTracesRequest(arg) {
  if (!(arg instanceof api_v3_query_service_pb.FindTracesRequest)) {
    throw new Error('Expected argument of type jaeger.api_v3.FindTracesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v3_FindTracesRequest(buffer_arg) {
  return api_v3_query_service_pb.FindTracesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v3_GetOperationsRequest(arg) {
  if (!(arg instanceof api_v3_query_service_pb.GetOperationsRequest)) {
    throw new Error('Expected argument of type jaeger.api_v3.GetOperationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v3_GetOperationsRequest(buffer_arg) {
  return api_v3_query_service_pb.GetOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v3_GetOperationsResponse(arg) {
  if (!(arg instanceof api_v3_query_service_pb.GetOperationsResponse)) {
    throw new Error('Expected argument of type jaeger.api_v3.GetOperationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v3_GetOperationsResponse(buffer_arg) {
  return api_v3_query_service_pb.GetOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v3_GetServicesRequest(arg) {
  if (!(arg instanceof api_v3_query_service_pb.GetServicesRequest)) {
    throw new Error('Expected argument of type jaeger.api_v3.GetServicesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v3_GetServicesRequest(buffer_arg) {
  return api_v3_query_service_pb.GetServicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v3_GetServicesResponse(arg) {
  if (!(arg instanceof api_v3_query_service_pb.GetServicesResponse)) {
    throw new Error('Expected argument of type jaeger.api_v3.GetServicesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v3_GetServicesResponse(buffer_arg) {
  return api_v3_query_service_pb.GetServicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v3_GetTraceRequest(arg) {
  if (!(arg instanceof api_v3_query_service_pb.GetTraceRequest)) {
    throw new Error('Expected argument of type jaeger.api_v3.GetTraceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v3_GetTraceRequest(buffer_arg) {
  return api_v3_query_service_pb.GetTraceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v3_SpansResponseChunk(arg) {
  if (!(arg instanceof api_v3_query_service_pb.SpansResponseChunk)) {
    throw new Error('Expected argument of type jaeger.api_v3.SpansResponseChunk');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v3_SpansResponseChunk(buffer_arg) {
  return api_v3_query_service_pb.SpansResponseChunk.deserializeBinary(new Uint8Array(buffer_arg));
}


var QueryServiceService = exports.QueryServiceService = {
  // GetTrace returns a single trace.
  // Note that the JSON response over HTTP is wrapped into result envelope "{"result": ...}"
  // It means that the JSON response cannot be directly unmarshalled using JSONPb.
  // This can be fixed by first parsing into user-defined envelope with standard JSON library
  // or string manipulation to remove the envelope. Alternatively generate objects using OpenAPI.
  getTrace: {
    path: '/jaeger.api_v3.QueryService/GetTrace',
    requestStream: false,
    responseStream: true,
    requestType: api_v3_query_service_pb.GetTraceRequest,
    responseType: api_v3_query_service_pb.SpansResponseChunk,
    requestSerialize: serialize_jaeger_api_v3_GetTraceRequest,
    requestDeserialize: deserialize_jaeger_api_v3_GetTraceRequest,
    responseSerialize: serialize_jaeger_api_v3_SpansResponseChunk,
    responseDeserialize: deserialize_jaeger_api_v3_SpansResponseChunk,
  },
  // FindTraces searches for traces.
  // See GetTrace for JSON unmarshalling.
  findTraces: {
    path: '/jaeger.api_v3.QueryService/FindTraces',
    requestStream: false,
    responseStream: true,
    requestType: api_v3_query_service_pb.FindTracesRequest,
    responseType: api_v3_query_service_pb.SpansResponseChunk,
    requestSerialize: serialize_jaeger_api_v3_FindTracesRequest,
    requestDeserialize: deserialize_jaeger_api_v3_FindTracesRequest,
    responseSerialize: serialize_jaeger_api_v3_SpansResponseChunk,
    responseDeserialize: deserialize_jaeger_api_v3_SpansResponseChunk,
  },
  // GetServices returns service names.
  getServices: {
    path: '/jaeger.api_v3.QueryService/GetServices',
    requestStream: false,
    responseStream: false,
    requestType: api_v3_query_service_pb.GetServicesRequest,
    responseType: api_v3_query_service_pb.GetServicesResponse,
    requestSerialize: serialize_jaeger_api_v3_GetServicesRequest,
    requestDeserialize: deserialize_jaeger_api_v3_GetServicesRequest,
    responseSerialize: serialize_jaeger_api_v3_GetServicesResponse,
    responseDeserialize: deserialize_jaeger_api_v3_GetServicesResponse,
  },
  // GetOperations returns operation names.
  getOperations: {
    path: '/jaeger.api_v3.QueryService/GetOperations',
    requestStream: false,
    responseStream: false,
    requestType: api_v3_query_service_pb.GetOperationsRequest,
    responseType: api_v3_query_service_pb.GetOperationsResponse,
    requestSerialize: serialize_jaeger_api_v3_GetOperationsRequest,
    requestDeserialize: deserialize_jaeger_api_v3_GetOperationsRequest,
    responseSerialize: serialize_jaeger_api_v3_GetOperationsResponse,
    responseDeserialize: deserialize_jaeger_api_v3_GetOperationsResponse,
  },
};

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService);
