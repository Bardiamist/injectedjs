import React, {
  useState,
  useCallback,
} from 'react';
import {
  Platform,
  View,
  Button,
} from 'react-native';
import {
  WebView,
} from 'react-native-webview';

export default () => {
  const [isWebViewVisible, setIsWebViewVisible] = useState(true);

  const toggleWebView = useCallback(() => {
    setIsWebViewVisible(false);
    setTimeout(() => {
      setIsWebViewVisible(true);
    });
  }, []);

  return (
    <>
      <View style={{ height: 44 }} />
      <Button
        title="Rerender WebView"
        onPress={toggleWebView}
      />
      {isWebViewVisible ? (
        <WebView
          allowUniversalAccessFromFileURLs
          originWhitelist={['*']}
          source={{ uri: Platform.OS === 'ios' ? 'webView/index.html' : 'file:///android_asset/index.html' }}
          injectedJavaScriptBeforeContentLoaded={`
            window.injectedSettings = 'Hello';
            alert('Injected java script');
          `}
        />
      ) : <View />}
    </>
  );
};
