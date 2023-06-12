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
var sampling_pb = require('./sampling_pb.js');
var gogoproto_gogo_pb = require('./gogoproto/gogo_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');

function serialize_jaeger_api_v2_SamplingStrategyParameters(arg) {
  if (!(arg instanceof sampling_pb.SamplingStrategyParameters)) {
    throw new Error('Expected argument of type jaeger.api_v2.SamplingStrategyParameters');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v2_SamplingStrategyParameters(buffer_arg) {
  return sampling_pb.SamplingStrategyParameters.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_jaeger_api_v2_SamplingStrategyResponse(arg) {
  if (!(arg instanceof sampling_pb.SamplingStrategyResponse)) {
    throw new Error('Expected argument of type jaeger.api_v2.SamplingStrategyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_jaeger_api_v2_SamplingStrategyResponse(buffer_arg) {
  return sampling_pb.SamplingStrategyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// SamplingManager defines service for the remote sampler.
var SamplingManagerService = exports.SamplingManagerService = {
  getSamplingStrategy: {
    path: '/jaeger.api_v2.SamplingManager/GetSamplingStrategy',
    requestStream: false,
    responseStream: false,
    requestType: sampling_pb.SamplingStrategyParameters,
    responseType: sampling_pb.SamplingStrategyResponse,
    requestSerialize: serialize_jaeger_api_v2_SamplingStrategyParameters,
    requestDeserialize: deserialize_jaeger_api_v2_SamplingStrategyParameters,
    responseSerialize: serialize_jaeger_api_v2_SamplingStrategyResponse,
    responseDeserialize: deserialize_jaeger_api_v2_SamplingStrategyResponse,
  },
};

exports.SamplingManagerClient = grpc.makeGenericClientConstructor(SamplingManagerService);
