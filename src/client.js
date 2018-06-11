
var messages = require('./protos/client_pb');
var services = require('./protos/client_grpc_pb');
var grpc = require('grpc');

function main() {

  var client = new services.CommandHandlerClient('localhost:50051',
                                          grpc.credentials.createInsecure());
  var request = new messages.Command();
  request.setCommandtype(messages.Command.CommandType['FORWARD']);

  client.sendCommand(request, function(err, response) {
    console.log(response);
  });
}

function test() {
    console.log("Test")
}