import React, { Component } from 'react';
import Link from 'gatsby-link';
import Chip from 'react-md/lib/Chips';
import './PostTags.scss';

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div>
        {
            tags && tags.map(tag =>
              <Link key={tag} style={{ textDecoration: 'none' }} to={'/tags/'}>
                <Chip label={tag} className="post-preview-tags" />
              </Link>)
        }
      </div>

    );
  }
}

export default PostTags;
