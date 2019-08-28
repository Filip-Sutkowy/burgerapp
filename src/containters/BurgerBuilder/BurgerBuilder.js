import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';


const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
  tomato: 0.65
}

class BurgerBuilder extends Component {
  constructor(props) {
    super();
    this.state = {
      ingredients: null,
      totalPrice: 4,
      purchaseable: false,
      purchasing: false,
      loading: false,
      error: false
    }
  }

  componentDidMount() {
    axios.get('https://burger-app-49051.firebaseio.com/ingredients.json')
      .then(res => {
        this.setState({ingredients: res.data});
      })
      .catch(err => {
        this.setState({error: true});
      });
  }

  addIngredientHandler = type => {
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = this.state.ingredients[type] + 1;

    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });

    console.log(this.state.ingredients[type]);
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = type => {
    const updatedIngredients = {
      ...this.state.ingredients
    }
    let newPrice = this.state.totalPrice;

    
    if(this.state.ingredients[type] > 0) {
      updatedIngredients[type] = this.state.ingredients[type] - 1;
      newPrice -= INGREDIENT_PRICES[type];

      this.setState({
        totalPrice: newPrice,
        ingredients: updatedIngredients
      });
    }
    console.log(this.state.ingredients[type]);
    this.updatePurchaseState(updatedIngredients);
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
    .map(igKey => {
      return ingredients[igKey]
    })
    .reduce((sum, el) => {
      return sum + el;
    }, 0);

    this.setState({ purchaseable : sum > 0 });
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    this.setState({loading: true});
    // alert('You Continue!');
    const order = {
      ingredients : this.state.ingredients,
      price : this.state.totalPrice,
      customer : {
        name: 'Desto',
        address : {
          street : 'Fromborska',
          zipCode : '2137',
          country : 'Poland'
        },
        email : 'desto@desto.desto'
      },
      deliveryMethod: 'fastest'
    };
    axios.post('/orders.json', order)
      .then(res => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(err => {
        this.setState({ loading: false, purchasing: false });
      });
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

    if(this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchaseable={this.state.purchaseable}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
    orderSummary = <OrderSummary
      ingredients={this.state.ingredients}
      price={this.state.totalPrice}
      purchaseCancelled={this.purchaseCancelHandler}
      purchaseContinued={this.purchaseContinueHandler} />;
    }

    if(this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>      
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);