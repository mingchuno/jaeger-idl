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
var collector_pb = require('./collector_pb.js');
var model_pb = require('./model_pb.js');
var gogoproto_gogo_pb = require('./gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');

function serialize_jaeger_api_v2_PostSpansRequest(arg) {
  if (!(arg instanceof collector_pb.PostSpansRequest)) {
    throw new Error('Expected argument of type jaeger.api_v2.PostSpansRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v2_PostSpansRequest(buffer_arg) {
  return collector_pb.PostSpansRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v2_PostSpansResponse(arg) {
  if (!(arg instanceof collector_pb.PostSpansResponse)) {
    throw new Error('Expected argument of type jaeger.api_v2.PostSpansResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v2_PostSpansResponse(buffer_arg) {
  return collector_pb.PostSpansResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CollectorServiceService = exports.CollectorServiceService = {
  postSpans: {
    path: '/jaeger.api_v2.CollectorService/PostSpans',
    requestStream: false,
    responseStream: false,
    requestType: collector_pb.PostSpansRequest,
    responseType: collector_pb.PostSpansResponse,
    requestSerialize: serialize_jaeger_api_v2_PostSpansRequest,
    requestDeserialize: deserialize_jaeger_api_v2_PostSpansRequest,
    responseSerialize: serialize_jaeger_api_v2_PostSpansResponse,
    responseDeserialize: deserialize_jaeger_api_v2_PostSpansResponse,
  },
};

exports.CollectorServiceClient = grpc.makeGenericClientConstructor(CollectorServiceService);
