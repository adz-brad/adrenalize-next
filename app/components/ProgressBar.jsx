'use client'

import { useState, useEffect, useRef } from "react"

export default function ProgressBar({ strokeColor, strokeWidth, size, value, textSize, textColor }) {

    const [ percent, setPercent ] = useState(0)
    const [ increment, setIncrement ] = useState(false)

    const radius = size * 0.44
    const dashArray = radius * Math.PI * 2
    const dashOffset = dashArray - (dashArray * percent) / 100

    const scrollRef = useRef()

    useEffect(() => {
        const interval = setInterval(() => {
            if(increment && percent < value){
                setPercent((percent) => percent + 1)
            }
            else if(!increment && percent !== 0){
                setPercent(0)
            }
        }, 4);
        return () => clearInterval(interval)
    }, [ increment, percent ])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          if(entry.isIntersecting){
            setIncrement(true)
          }
          else{
            setIncrement(false)
          }
        })
        observer.observe(scrollRef.current)
      }, [])

    return (

            <div ref={scrollRef}>
                <svg 
                    width={size} 
                    height={size} 
                    viewBox={`0 0 ${size} ${size}`}
                >
                    <circle 
                        cx={size / 2}
                        cy={size / 2}
                        strokeWidth={strokeWidth}
                        r={radius}
                        className="progressBar-bg"
                    />
                    <circle 
                        cx={size / 2}
                        cy={size / 2}
                        strokeWidth={strokeWidth}
                        r={radius}
                        className={`progressBar-stroke ${strokeColor}`}
                        style={{
                            strokeDasharray: dashArray,
                            strokeDashoffset: dashOffset
                        }}
                        transform={`rotate(-90 ${size/2} ${size/2})`}
                    />
                    <filter id="dropshadow" x="-2" y="-2" width={size} height={size}>
                        <feGaussianBlur  stdDeviation={size/100}/>
                    </filter>
                    <text 
                        x="50%" 
                        y="50%"
                        dy="0.3em"
                        textAnchor="middle"
                        className={`${textSize} font-semibold ${textColor}`}
                    >
                        {percent}
                    </text>
                </svg>
            </div>

     )
}
