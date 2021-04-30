import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSPinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component'
import { compose } from 'redux';




const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,

})

const CollectionOverviewContainer = compose(
connect(mapStateToProps),
WithSPinner
)(CollectionsOverview);


export default CollectionOverviewContainer;
