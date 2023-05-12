import './app_filter.css';

// Define the AppFilter component that takes two props: UpdateFilterHandler and filter
const AppFilter = ({ updateFilterHandler, filter }) => {
  // Render a div with class 'btn-group' and a series of buttons based on the btnsArr array
  return (
    <div className='btn-group'>
      {btnsArr.map((btn) => (
        <button
          key={btn.name} // Use the name property of the current button object as the key
          className={`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`} // Conditionally apply the 'btn-dark' or 'btn-outline-dark' class based on the value of the filter prop
          onClick={() => updateFilterHandler(btn.name)} // Call the UpdateFilterHandler function with the name property of the current button object as an argument when the button is clicked
          type='button'
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

// Define an array of button objects with a name and label property
const btnsArr = [
  { name: 'all', label: 'Barcha kinolar' },
  { name: 'popular', label: 'Mashhur kinolar' },
  { name: 'mostviewers', label: 'Eng kup kurilgan kinolar' },
];

export default AppFilter; // Export the AppFilter component as the default export
