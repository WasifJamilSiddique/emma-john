
import React from 'react';
import { useForm} from 'react-hook-form';
import './Shipment.css'
import { useAuth } from '../Login/user-auth';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>  console.log(data) ;
    const auth = useAuth();
    return (
    <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>

            <input className="form-control m-2" defaultValue={auth.user.name} name="name" ref={register({ required: true })}
                placeholder="Name" />
            {errors.name && <span>Name is required</span>}

            <input className="form-control m-2" defaultValue={auth.user.email} name="email" ref={register({ required: true })}
                placeholder="Email" />
            {errors.email && <span>Email is required</span>}

            <input className="form-control m-2" name="a1" ref={register({ required: true })}
                placeholder="Address" />
            {errors.a1 && <span>Address is required</span>}

            <input className="form-control m-2" name="a2" placeholder="Address 2" />

            <input className="form-control m-2" name="city" ref={register({ required: true })}
                placeholder="City" />
            {errors.city && <span>city is required</span>}

            <input className="form-control m-2" name="country" ref={register({ required: true })}
                placeholder="Country" />
            {errors.country && <span>country is required</span>}

            <input className="form-control m-2" name="zipcode" ref={register({ required: true })}
                placeholder="Zip Code" />
            {errors.zipcode && <span>Zip Code is required</span>}

            <input className="btn btn-outline-success m-2" type="submit" />
        </form>
    </div>
    )
}

export default Shipment;