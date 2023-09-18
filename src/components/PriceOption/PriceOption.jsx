import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-slate-400 rounded-xl p-4 text-center flex flex-col'>
            <h2>
                <span className='text-4xl font-bold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl my-8'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) =>
                        <Feature key={index}
                            feature={feature}></Feature>)
                }
            </div>
            <button className='mt-8 btn btn-accent w-full'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}

export default PriceOption;