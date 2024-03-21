// const heading = React.createElement(
//   'div',
//   { id: 'container', xyz: 'abc' },
//   React.createElement('h2', {}, 'Hello from H2')
// );

// console.log(heading);

// Create a structure like this
/**
 * <div id='container'>
 *    <div id ='child'>
 *        <h1>I'm h1 tag</h1>
 *        <h1>I'm h2 tag</h1>
 *    </div>
 * </div>
 */

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, "I'm h1 tag"),
    React.createElement('h2', {}, "I'm h2 tag"),
  ])
);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(parent);
