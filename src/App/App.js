import React, { Component } from 'react';

import Template, { Page, Section } from "../Common/Templates/Template";

class App extends Component {
  render() {
    return Template.render(
        (
        <Page layout="main">
            <Section slot="content">
                Main page content
            </Section>
        </Page>
        )
    );
  }
}

export default App;
