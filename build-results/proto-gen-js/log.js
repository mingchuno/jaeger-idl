// source: model.proto
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

goog.provide('proto.jaeger.api_v2.Log');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.google.protobuf.Timestamp');
goog.require('proto.jaeger.api_v2.KeyValue');

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
proto.jaeger.api_v2.Log = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.jaeger.api_v2.Log.repeatedFields_, null);
};
goog.inherits(proto.jaeger.api_v2.Log, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jaeger.api_v2.Log.displayName = 'proto.jaeger.api_v2.Log';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.jaeger.api_v2.Log.repeatedFields_ = [2];



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
proto.jaeger.api_v2.Log.prototype.toObject = function(opt_includeInstance) {
  return proto.jaeger.api_v2.Log.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jaeger.api_v2.Log} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jaeger.api_v2.Log.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && proto.google.protobuf.Timestamp.toObject(includeInstance, f),
    fieldsList: jspb.Message.toObjectList(msg.getFieldsList(),
    proto.jaeger.api_v2.KeyValue.toObject, includeInstance)
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
 * @return {!proto.jaeger.api_v2.Log}
 */
proto.jaeger.api_v2.Log.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jaeger.api_v2.Log;
  return proto.jaeger.api_v2.Log.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jaeger.api_v2.Log} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jaeger.api_v2.Log}
 */
proto.jaeger.api_v2.Log.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.Timestamp;
      reader.readMessage(value,proto.google.protobuf.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = new proto.jaeger.api_v2.KeyValue;
      reader.readMessage(value,proto.jaeger.api_v2.KeyValue.deserializeBinaryFromReader);
      msg.addFields(value);
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
proto.jaeger.api_v2.Log.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jaeger.api_v2.Log.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jaeger.api_v2.Log} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jaeger.api_v2.Log.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.protobuf.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.jaeger.api_v2.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.jaeger.api_v2.Log.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.jaeger.api_v2.Log} returns this
*/
proto.jaeger.api_v2.Log.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jaeger.api_v2.Log} returns this
 */
proto.jaeger.api_v2.Log.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jaeger.api_v2.Log.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated KeyValue fields = 2;
 * @return {!Array<!proto.jaeger.api_v2.KeyValue>}
 */
proto.jaeger.api_v2.Log.prototype.getFieldsList = function() {
  return /** @type{!Array<!proto.jaeger.api_v2.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.jaeger.api_v2.KeyValue, 2));
};


/**
 * @param {!Array<!proto.jaeger.api_v2.KeyValue>} value
 * @return {!proto.jaeger.api_v2.Log} returns this
*/
proto.jaeger.api_v2.Log.prototype.setFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.jaeger.api_v2.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.jaeger.api_v2.KeyValue}
 */
proto.jaeger.api_v2.Log.prototype.addFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.jaeger.api_v2.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.jaeger.api_v2.Log} returns this
 */
proto.jaeger.api_v2.Log.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};


