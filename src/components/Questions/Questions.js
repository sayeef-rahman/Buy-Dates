import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div>
            <div className='q-one'>
                <h2>props vs State </h2>
                <table>
                    <tr>
                        <th>Props</th>
                        <th>State</th>
                    </tr>
                    <tr>
                        <td>Passed in from parent</td>
                        <td>Created within component</td>
                    </tr>
                    <tr>
                        <td>(MyComp foo = "br"/)</td>
                        <td>getInitialState</td>
                    </tr>
                    <tr>
                        <td>props read-only</td>
                        <td>state to read</td>
                    </tr>
                    <tr>
                        <td>Can be Defaulted and validated</td>
                        <td>setState() to update</td>
                    </tr>
                    <tr>
                        <td>getDefault Props</td>
                        <td>state should be considered private</td>
                    </tr>
                    </table>
            </div>
            <div className='q-2'>
                <h2>How useState() Works?</h2>
                <p><span className='answer'>Answer: </span>There are 2 types of components in react.The Class Component and Function Component.First one is the onld one and last one is the latest one. When we need to unzip or extract some state logic from an react component we use HOOK. useState is one of the hooks which returns an array with two elements. 1- Value: assign current value to first element 2- Update Function: assigns the updater function to second element. We need to use the state value when generating  UI</p>
            </div>
        </div>
    );
};

export default Questions;