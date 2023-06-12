// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2019 The Jaeger Authors.
// Copyright (c) 2018 Uber Technologies, Inc.
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
var query_pb = require('./query_pb.js');
var model_pb = require('./model_pb.js');
var gogoproto_gogo_pb = require('./gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');

function serialize_jaeger_api_v2_ArchiveTraceRequest(arg) {
  if (!(arg instanceof query_pb.ArchiveTraceRequest)) {
    throw new Error('Expected argument of type jaeger.api_v2.ArchiveTraceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v2_ArchiveTraceRequest(buffer_arg) {
  return query_pb.ArchiveTraceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v2_ArchiveTraceResponse(arg) {
  if (!(arg instanceof query_pb.ArchiveTraceResponse)) {
    throw new Error('Expected argument of type jaeger.api_v2.ArchiveTraceResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v2_ArchiveTraceResponse(buffer_arg) {
  return query_pb.ArchiveTraceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v2_FindTracesRequest(arg) {
  if (!(arg instanceof query_pb.FindTracesRequest)) {
    throw new Error('Expected argument of type jaeger.api_v2.FindTracesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v2_FindTracesRequest(buffer_arg) {
  return query_pb.FindTracesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v2_GetDependenciesRequest(arg) {
  if (!(arg instanceof query_pb.GetDependenciesRequest)) {
    throw new Error('Expected argument of type jaeger.api_v2.GetDependenciesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v2_GetDependenciesRequest(buffer_arg) {
  return query_pb.GetDependenciesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v2_GetDependenciesResponse(arg) {
  if (!(arg instanceof query_pb.GetDependenciesResponse)) {
    throw new Error('Expected argument of type jaeger.api_v2.GetDependenciesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v2_GetDependenciesResponse(buffer_arg) {
  return query_pb.GetDependenciesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v2_GetOperationsRequest(arg) {
  if (!(arg instanceof query_pb.GetOperationsRequest)) {
    throw new Error('Expected argument of type jaeger.api_v2.GetOperationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v2_GetOperationsRequest(buffer_arg) {
  return query_pb.GetOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v2_GetOperationsResponse(arg) {
  if (!(arg instanceof query_pb.GetOperationsResponse)) {
    throw new Error('Expected argument of type jaeger.api_v2.GetOperationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v2_GetOperationsResponse(buffer_arg) {
  return query_pb.GetOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v2_GetServicesRequest(arg) {
  if (!(arg instanceof query_pb.GetServicesRequest)) {
    throw new Error('Expected argument of type jaeger.api_v2.GetServicesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v2_GetServicesRequest(buffer_arg) {
  return query_pb.GetServicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v2_GetServicesResponse(arg) {
  if (!(arg instanceof query_pb.GetServicesResponse)) {
    throw new Error('Expected argument of type jaeger.api_v2.GetServicesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v2_GetServicesResponse(buffer_arg) {
  return query_pb.GetServicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v2_GetTraceRequest(arg) {
  if (!(arg instanceof query_pb.GetTraceRequest)) {
    throw new Error('Expected argument of type jaeger.api_v2.GetTraceRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v2_GetTraceRequest(buffer_arg) {
  return query_pb.GetTraceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v2_SpansResponseChunk(arg) {
  if (!(arg instanceof query_pb.SpansResponseChunk)) {
    throw new Error('Expected argument of type jaeger.api_v2.SpansResponseChunk');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v2_SpansResponseChunk(buffer_arg) {
  return query_pb.SpansResponseChunk.deserializeBinary(new Uint8Array(buffer_arg));
}


var QueryServiceService = exports.QueryServiceService = {
  getTrace: {
    path: '/jaeger.api_v2.QueryService/GetTrace',
    requestStream: false,
    responseStream: true,
    requestType: query_pb.GetTraceRequest,
    responseType: query_pb.SpansResponseChunk,
    requestSerialize: serialize_jaeger_api_v2_GetTraceRequest,
    requestDeserialize: deserialize_jaeger_api_v2_GetTraceRequest,
    responseSerialize: serialize_jaeger_api_v2_SpansResponseChunk,
    responseDeserialize: deserialize_jaeger_api_v2_SpansResponseChunk,
  },
  archiveTrace: {
    path: '/jaeger.api_v2.QueryService/ArchiveTrace',
    requestStream: false,
    responseStream: false,
    requestType: query_pb.ArchiveTraceRequest,
    responseType: query_pb.ArchiveTraceResponse,
    requestSerialize: serialize_jaeger_api_v2_ArchiveTraceRequest,
    requestDeserialize: deserialize_jaeger_api_v2_ArchiveTraceRequest,
    responseSerialize: serialize_jaeger_api_v2_ArchiveTraceResponse,
    responseDeserialize: deserialize_jaeger_api_v2_ArchiveTraceResponse,
  },
  findTraces: {
    path: '/jaeger.api_v2.QueryService/FindTraces',
    requestStream: false,
    responseStream: true,
    requestType: query_pb.FindTracesRequest,
    responseType: query_pb.SpansResponseChunk,
    requestSerialize: serialize_jaeger_api_v2_FindTracesRequest,
    requestDeserialize: deserialize_jaeger_api_v2_FindTracesRequest,
    responseSerialize: serialize_jaeger_api_v2_SpansResponseChunk,
    responseDeserialize: deserialize_jaeger_api_v2_SpansResponseChunk,
  },
  getServices: {
    path: '/jaeger.api_v2.QueryService/GetServices',
    requestStream: false,
    responseStream: false,
    requestType: query_pb.GetServicesRequest,
    responseType: query_pb.GetServicesResponse,
    requestSerialize: serialize_jaeger_api_v2_GetServicesRequest,
    requestDeserialize: deserialize_jaeger_api_v2_GetServicesRequest,
    responseSerialize: serialize_jaeger_api_v2_GetServicesResponse,
    responseDeserialize: deserialize_jaeger_api_v2_GetServicesResponse,
  },
  getOperations: {
    path: '/jaeger.api_v2.QueryService/GetOperations',
    requestStream: false,
    responseStream: false,
    requestType: query_pb.GetOperationsRequest,
    responseType: query_pb.GetOperationsResponse,
    requestSerialize: serialize_jaeger_api_v2_GetOperationsRequest,
    requestDeserialize: deserialize_jaeger_api_v2_GetOperationsRequest,
    responseSerialize: serialize_jaeger_api_v2_GetOperationsResponse,
    responseDeserialize: deserialize_jaeger_api_v2_GetOperationsResponse,
  },
  getDependencies: {
    path: '/jaeger.api_v2.QueryService/GetDependencies',
    requestStream: false,
    responseStream: false,
    requestType: query_pb.GetDependenciesRequest,
    responseType: query_pb.GetDependenciesResponse,
    requestSerialize: serialize_jaeger_api_v2_GetDependenciesRequest,
    requestDeserialize: deserialize_jaeger_api_v2_GetDependenciesRequest,
    responseSerialize: serialize_jaeger_api_v2_GetDependenciesResponse,
    responseDeserialize: deserialize_jaeger_api_v2_GetDependenciesResponse,
  },
};

exports.QueryServiceClient = grpc.makeGenericClientConstructor(QueryServiceService);
