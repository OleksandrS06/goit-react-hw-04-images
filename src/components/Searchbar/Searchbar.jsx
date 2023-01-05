import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';

const Searchbar = ({ onSubmit }) => {
  const [request, setRequest] = useState('');

  const inputHandler = e => {
    setRequest(e.currentTarget.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const normalizedRequest = request.trim().toLowerCase();

    onSubmit(normalizedRequest);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={submitHandler}>
        <button type="submit" className="SearchForm-button">
          <span className="button-label">
            <FcSearch size={25} />
          </span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={request}
          onChange={inputHandler}
        />
      </form>
    </header>
  );
};

// class oldSearchbar extends Component {
//   state = {
//     request: '',
//   };

//   componentDidUpdate() {}

//   inputHandler = e => {
//     this.setState({ request: e.currentTarget.value });
//   };

//   submitHandler = e => {
//     e.preventDefault();

//     const normalizedRequest = this.state.request.trim().toLowerCase();
//     this.props.onSubmit(normalizedRequest);
//   };

//   render() {
//     const { request } = this.state;
//     return (
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={this.submitHandler}>
//           <button type="submit" className="SearchForm-button">
//             <span className="button-label">
//               <FcSearch size={25} />
//             </span>
//           </button>

//           <input
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={request}
//             onChange={this.inputHandler}
//           />
//         </form>
//       </header>
//     );
//   }
// }
export default Searchbar;
