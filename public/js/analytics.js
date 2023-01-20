var $04fUa$analytics = require("analytics");
var $04fUa$tinycognito = require("tiny-cognito");
var $04fUa$analyticsawspinpoint = require("@analytics/aws-pinpoint");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}



// Identity pool ID that allows for unauthenticated access
const $882b6d93070905b3$var$poolId = "us-east-1:11111111-22222-222222-44444";
const $882b6d93070905b3$var$region = "us-east-1";
function $882b6d93070905b3$var$getCredentials() {
    return (0, ($parcel$interopDefault($04fUa$tinycognito)))({
        COGNITO_REGION: $882b6d93070905b3$var$region,
        IDENTITY_POOL_ID: $882b6d93070905b3$var$poolId
    });
}
const $882b6d93070905b3$var$analytics = (0, ($parcel$interopDefault($04fUa$analytics)))({
    app: "automato",
    plugins: [
        (0, ($parcel$interopDefault($04fUa$analyticsawspinpoint)))({
            pinpointAppId: "123456789",
            getCredentials: $882b6d93070905b3$var$getCredentials
        })
    ]
});
window.automatoTracker = (_appId, _auth)=>{
    return $882b6d93070905b3$var$analytics;
};


//# sourceMappingURL=analytics.js.map
