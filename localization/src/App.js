import "./App.css";
import { useState, useEffect } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

function App() {
  const defaultLocale = navigator.language;
  console.log(defaultLocale);
  const messages = {
    "tr-TR": {
      title: "merhaba dünya",
      description: "{count} yeni mesajınız var",
    },
    "en-US": {
      title: "hello world",
      description: "you have {count} new messages",
    },
  };
  const [lang, setLang] = useState(localStorage.getItem("lang") || defaultLocale);
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);
  return (
    <div className="App">
      <IntlProvider locale={lang} messages={messages[lang]}>
        <FormattedMessage id="title" />
        <br />
        <FormattedMessage id="description" values={{ count: 5 }} />
        <br />
        <button onClick={() => setLang("tr-TR")}>TR</button>
        <button onClick={() => setLang("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
