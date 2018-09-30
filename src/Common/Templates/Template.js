import React from 'react';
import { LayoutProvider, Section, Page } from 'react-page-layout';

import MainTemplate from "./MainTemplate";

// Create a map for all your layouts
const layouts = {
    'main': MainTemplate,
};

class Template {
    static render(content) {
        return (
            <LayoutProvider layouts={layouts}>
                {content}
            </LayoutProvider>
        );
    }
}

export {
    Section,
    Page,
};
export default Template;
