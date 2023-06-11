import { useCallback } from "react";
import { useSelector } from "react-redux"
const ValidationError = () => {
    const { error } = useSelector(state => state.auth)
    // console.log(error);
    const errorMasage = useCallback(() => {
        return Object.keys(error).map(name => {
            const msg = error[name].join(', ')
            return ` ${name} ${msg}`
        })
    }, [error])
    // console.log(error !== null && errorMasage());
    return (error !== null &&
        errorMasage().map(error => (
            <div className=" alert alert-danger mb-1 p-0 " role='alert'>{error} </div>
        ))

    )
}
export default ValidationError