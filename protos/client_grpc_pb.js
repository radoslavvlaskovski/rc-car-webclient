// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_client_pb = require('../protos/client_pb.js');

function serialize_Command(arg) {
  if (!(arg instanceof protos_client_pb.Command)) {
    throw new Error('Expected argument of type Command');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Command(buffer_arg) {
  return protos_client_pb.Command.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Empty(arg) {
  if (!(arg instanceof protos_client_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return protos_client_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var CommandHandlerService = exports.CommandHandlerService = {
  sendCommand: {
    path: '/CommandHandler/SendCommand',
    requestStream: false,
    responseStream: false,
    requestType: protos_client_pb.Command,
    responseType: protos_client_pb.Empty,
    requestSerialize: serialize_Command,
    requestDeserialize: deserialize_Command,
    responseSerialize: serialize_Empty,
    responseDeserialize: deserialize_Empty,
  },
};

exports.CommandHandlerClient = grpc.makeGenericClientConstructor(CommandHandlerService);
