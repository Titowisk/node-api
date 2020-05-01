const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

/**
 * tittle
 * description
 * url
 * createdAt
 * watch
 * star
 * fork
 * usedby
 * issues
 * pullRequests
 */
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.add({
    watch: {
        type: Number,
        default: 0,
    },
    star: {
        type: Number,
        default: 0,
    },
    fork: {
        type: Number,
        default: 0,
    },
    usedby: {
        type: Number,
        default: 0,
    },
    issues: {
        type: Number,
        default: 0,
    },
    pullRequests: {
        type: Number,
        default: 0,
    },
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);
