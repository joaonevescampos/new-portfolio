const { useState } = require("react");
const useClient = typeof window !== 'undefined';

if (useClient) {
    module.exports.useState = useState;
}