import { useRef, useState } from 'react';
import './counter_new.css';

function BankAccountInput() {
    const [cardNumber, setCardNumber] = useState('');
    const [cvcNumber, setCvcNumber] = useState('');
    const [dateNumber,setDateNumber]= useState('');
    const cvcRef = useRef(null);
    const dateRef = useRef(null);
    const date1Number =useRef(null);

    const handleInput = (e) => {
        const val = e.target.value;
        setCardNumber(val);
        if (val.length === 16) {
            cvcRef.current.focus();
        }
    };

    const handleInputCvc = (e) => {
        const val = e.target.value;
        setCvcNumber(val);
        if (val.length === 3) {
            dateRef.current.focus();
        }
    };
    const handleDate =(e)=>{
        const val = e.target.value
        setDateNumber(val);
        if (val.length === 8) {
            date1Number.current.focus()
        }
    };

    return (
        <div className="w-50 mx-auto mb-5">
            <div className="border p-3 mt-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Card number"
                    onChange={handleInput}
                    value={cardNumber}
                />
                <input
                    ref={cvcRef}
                    type="text"
                    className="form-control mt-2"
                    placeholder="Secure number"
                    onChange={handleInputCvc}
                    value={cvcNumber}
                />
                <input
                    ref={dateRef}
                    type="number"
                    onChange={handleDate}
                    className="form-control mt-2"
                    placeholder="Year/Month"
                    value={dateNumber}
                />
                      <input
                    ref={date1Number}
                    type="date"
                    onChange={handleDate}
                    className="form-control mt-2"
                    placeholder="Year/Month"
                />
            </div>
        </div>
    );
};

export default BankAccountInput;
