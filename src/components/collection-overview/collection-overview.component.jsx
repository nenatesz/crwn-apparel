import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component.';
import { createStructuredSelector } from 'reselect';

import './collection-overview.styles.scss';
import { selectCollectionPreview } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

const CollectionsOverview = ({collections}) => {
    console.log(collections)
return (

    <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            ))
        }
    </div>
)};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionPreview
});

export default connect(mapStateToProps)(CollectionsOverview);