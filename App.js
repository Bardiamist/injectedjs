import React, {
  useState,
  useCallback,
} from 'react';
import {
  View,
  Button,
} from 'react-native';
import {
  WebView,
} from 'react-native-webview';

export default () => {
  const [isWebViewVisible, setIsWebViewVisible] = useState(false);

  const toggleWebView = useCallback(() => {
    setIsWebViewVisible(!isWebViewVisible);
  }, [isWebViewVisible]);

  return (
    <>
      <Button
        title="Toggle WebView"
        onPress={toggleWebView}
      />
      {isWebViewVisible ? (
        <WebView
          allowUniversalAccessFromFileURLs
          originWhitelist={['*']}
          source={{ uri: 'file:///android_asset/index.html' }}
          injectedJavaScriptBeforeContentLoaded={`
            alert('Injected java script executed');
          `}
        />
      ) : <View />}
    </>
  );
};
