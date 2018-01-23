import {connect} from 'react-redux';
import RecipeBox from '../components/RecipeBox';

const mapStateToProps = state => {

    return {

        recipes: state.recipes
    };
};

export default connect(mapStateToProps)(RecipeBox);