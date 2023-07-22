export default function ProductCard({
    title, price, features, _key
}) {
  return (
    <li 
        key={_key}
        className="flex flex-col items-center shadow-lg rounded-sm p-8"
    >   <h4 className="text-3xl font-bold">
            {title}
        </h4>
        {price === 'Custom' ? 
            <div className="flex flex-col space-y-4 p-8">
                <span>
                    If you're looking for:
                </span>
                <ul className="list-disc font-medium">
                    {features.map((feature, i) => {
                        return (
                            <li key={i}>
                                {feature}
                            </li>
                        )
                    })}
                </ul>
                <span>
                    Projects are subject to custom pricing. <strong>Contact us today to get started.</strong>
                </span>
            </div>
            :
            <ul className="list-disc font-medium my-8">
                {features.map((feature, i) => {
                    return (
                        <li key={i}>
                            {feature}
                        </li>
                    )
                })}
            </ul>
            }
            <div className="flex flex-col items-center space-y-1 mt-auto">
            {price === 'Custom' ? 
                <span className="text-3xl font-semibold mb-6">Custom Pricing</span>
            :
                <>
                    <span className="font-light text-sm">Starting at</span>
                    <span className="text-5xl font-semibold">${price}</span>
                    <span className="font-light text-sm">Per month.</span>
                </>
            }
            </div>
        <button className="button mt-4">
            {price === 'Custom' ? 'Get A Quote' : '7-Day Free Trial'}
        </button>
    </li>
  )
}
