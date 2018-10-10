using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace React.Native.Recaptcha.V3.RNReactNativeRecaptchaV3
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNReactNativeRecaptchaV3Module : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNReactNativeRecaptchaV3Module"/>.
        /// </summary>
        internal RNReactNativeRecaptchaV3Module()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNReactNativeRecaptchaV3";
            }
        }
    }
}
