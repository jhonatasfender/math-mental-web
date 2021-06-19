import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Pre = styled.pre`
  .json-key {
    color: brown;
  }
  .json-string {
    color: olive;
  }
  .json-number {
    color: navy;
  }
  .json-boolean {
    color: teal;
  }
  .json-null {
    color: dimgray;
  }
  .json-mark {
    color: black;
  }
  a.json-link {
    color: purple;
    transition: all 400ms;
    &:visited {
      color: slategray;
    }
    &:hover {
      color: blueviolet;
    }
    &:active {
      color: slategray;
    }
  }
  .dark-mode {
    .json-key {
      color: indianred;
    }
    .json-string {
      color: darkkhaki;
    }
    .json-number {
      color: deepskyblue;
    }
    .json-boolean {
      color: mediumseagreen;
    }
    .json-null {
      color: darkorange;
    }
    .json-mark {
      color: silver;
    }
    a.json-link {
      color: mediumorchid;
      &:visited {
        color: slategray;
      }
      &:hover {
        color: violet;
      }
      &:active {
        color: silver;
      }
    }
  }
`;

const toHtml = (thing, options) => {
  const defaults = { indent: 3, linkUrls: true, quoteKeys: false };
  const settings = { ...defaults, ...options };
  const htmlEntities = (text) =>
    text
      .replace(/&/g, '&amp;')
      .replace(/\\"/g, '&bsol;&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

  const spanTag = (type, display) =>
    display ? `<span class=json-${type}>${display}</span>` : '';

  const buildValueHtml = (value) => {
    const strType = /^"/.test(value) && 'string';
    const boolType = ['true', 'false'].includes(value) && 'boolean';
    const nullType = value === 'null' && 'null';
    const type = boolType || nullType || strType || 'number';
    const urlRegex = /https?:\/\/[^\s"]+/g;
    const makeLink = (link) => `<a class=json-link href="${link}">${link}</a>`;
    const display =
      strType && settings.linkUrls ? value.replace(urlRegex, makeLink) : value;

    return spanTag(type, display);
  };

  const replacer = (match, p1, p2, p3, p4) => {
    const part = { indent: p1, key: p2, value: p3, end: p4 };
    const findName = settings.quoteKeys ? /(.*)(): / : /"([\w$]+)": |(.*): /;
    const indentHtml = part.indent || '';
    const keyName = part.key && part.key.replace(findName, '$1$2');
    const keyHtml = part.key
      ? spanTag('key', keyName) + spanTag('mark', ': ')
      : '';
    const valueHtml = part.value ? buildValueHtml(part.value) : '';
    const endHtml = spanTag('mark', part.end);
    return indentHtml + keyHtml + valueHtml + endHtml;
  };

  const jsonLine = /^( *)("[^"]+": )?("[^"]*"|[\w.+-]*)?([{}[\],]*)?$/gm;
  const json = JSON.stringify(thing, null, settings.indent) || 'undefined';
  return htmlEntities(json).replace(jsonLine, replacer);
};

const Pretty = ({ children }) => {
  const ref = useRef();
  useEffect(() => {
    ref.current.innerHTML = toHtml(children);
  }, [children]);

  return createPortal(<Pre ref={ref} />, document.body);
};

export default Pretty;
