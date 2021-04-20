import React from 'react';
import { Route } from 'react-router';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component'

import CollectionPage from '../collection/collection.component';


// destructure the collections
 const ShopPage = ({match}) =>{ 
     console.log(match)
return ( 
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div> 
)};


export default ShopPage; 
