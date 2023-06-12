// source: sampling.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.jaeger.api_v2.RateLimitingSamplingStrategy');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jaeger.api_v2.RateLimitingSamplingStrategy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jaeger.api_v2.RateLimitingSamplingStrategy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jaeger.api_v2.RateLimitingSamplingStrategy.displayName = 'proto.jaeger.api_v2.RateLimitingSamplingStrategy';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jaeger.api_v2.RateLimitingSamplingStrategy.prototype.toObject = function(opt_includeInstance) {
  return proto.jaeger.api_v2.RateLimitingSamplingStrategy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jaeger.api_v2.RateLimitingSamplingStrategy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jaeger.api_v2.RateLimitingSamplingStrategy.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxtracespersecond: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jaeger.api_v2.RateLimitingSamplingStrategy}
 */
proto.jaeger.api_v2.RateLimitingSamplingStrategy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jaeger.api_v2.RateLimitingSamplingStrategy;
  return proto.jaeger.api_v2.RateLimitingSamplingStrategy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jaeger.api_v2.RateLimitingSamplingStrategy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jaeger.api_v2.RateLimitingSamplingStrategy}
 */
proto.jaeger.api_v2.RateLimitingSamplingStrategy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxtracespersecond(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jaeger.api_v2.RateLimitingSamplingStrategy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jaeger.api_v2.RateLimitingSamplingStrategy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jaeger.api_v2.RateLimitingSamplingStrategy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jaeger.api_v2.RateLimitingSamplingStrategy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxtracespersecond();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 maxTracesPerSecond = 1;
 * @return {number}
 */
proto.jaeger.api_v2.RateLimitingSamplingStrategy.prototype.getMaxtracespersecond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.jaeger.api_v2.RateLimitingSamplingStrategy} returns this
 */
proto.jaeger.api_v2.RateLimitingSamplingStrategy.prototype.setMaxtracespersecond = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


