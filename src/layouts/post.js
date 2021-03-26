import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {htmlToReact, withPrefix, markdownify} from '../utils';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <div className="inner outer">
              <article className="post post-full">
                <header className="post-header inner-sm">
                  <h1 className="post-title line-top">{_.get(this.props, 'page.title', null)}</h1>
                  {_.get(this.props, 'page.subtitle', null) && (
                  <div className="post-subtitle">
                    {htmlToReact(_.get(this.props, 'page.subtitle', null))}
                  </div>
                  )}
                </header>
                {_.get(this.props, 'page.image', null) && (
                <div className="post-image">
                  <img src={withPrefix(_.get(this.props, 'page.image', null))} alt={_.get(this.props, 'page.image_alt', null)} />
                </div>
                )}
                <div className="post-content inner-sm">
                  {markdownify(_.get(this.props, 'page.content', null))}
                </div>
                <footer className="post-meta inner-sm">
                  <time className="published" dateTime={moment(_.get(this.props, 'page.date', null)).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'page.date', null)).strftime('%B %d, %Y')}</time>
                </footer>
              </article>
            </div>
            </Layout>
        );
    }
}
