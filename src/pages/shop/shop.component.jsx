import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component'
import WithSPinner from '../../components/with-spinner/with-spinner.component';
import { convertColectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionPage from '../collection/collection.component';

const CollectionPageWithSpinner = WithSPinner(CollectionPage);
const CollectionsOverviewWithSpinner = WithSPinner(CollectionsOverview);

class ShopPage extends Component{    
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {

            const collectionsMap = convertColectionsSnapshotToMap(snapshot);
            // dispatch the action of getting the collections object from the firestore to the reducer
            updateCollections(collectionsMap);
            this.setState({loading: false})
        })
    }

    render(){
        const { match } = this.props
        const { loading } = this.state
        return (
            <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />

        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
    </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage); 
