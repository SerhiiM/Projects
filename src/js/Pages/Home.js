import React from 'react';
import dispatcher from "../dispatcher";
import BlockForView from './BlockForView';
import * as cnst from '../Common/constant';
import {Link} from 'react-router';
import { connect } from 'react-redux';

class Home extends React.Component {
    
    state = {
        name:'This is it guys!',

        numbers:'',
        result:'',
    }
    onClickForAction = () => {
        console.log('btn have been clicked');
        dispatcher.dispatch({type: cnst.TEST_ACTION, visibleText:true });
    }
    iqTest = () => {
        const arr = this.state.numbers.split(" ")
        const numbers = arr.map((el)=>{return parseInt(el)});
        
        var odd = numbers.filter((el)=>{ return el % 2 === 1});
        var even = numbers.filter((el)=>{ return el % 2 === 0});
        
        const result =  odd.length < even.length ? 
            (numbers.indexOf(odd[0]) + 1) : 
            (numbers.indexOf(even[0]) + 1);
        this.setState({result:result});
    }
    addNumbers = (e) => {
        this.setState({ numbers: e.target.value });
    }
    render() {
        const result = this.state.result
        console.log(this.props.todos);
        return (
            <main>
                <nav className='NavigationBlock'>
                    <section className='NavigationBlockLinks'>
                        <Link to={`/about`}>About</Link>
                        <Link to={`/`}>Login</Link>
                    </section>
                </nav>
                <section className='HomePageBlock'>
                    <div>{this.state.name}</div>
                    <input onChange={this.addNumbers} />
                    <h4>Exeption on position: {result}</h4>
                    <button className = 'Btn' onClick={this.iqTest}>Count</button>
                    <button className = 'Btn' onClick={this.onClickForAction}>Click for dispatcher</button>
                    <BlockForView />
                </section>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

Home = connect(
    mapStateToProps
    )(Home);
export default Home