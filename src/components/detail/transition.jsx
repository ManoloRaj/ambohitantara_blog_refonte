import { useEffect, useState } from "react";
import "../../assets/styles/2_containers/transitionEffect.css";

export function TransitionFunction({
    isTransit
}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timeoutId = setTimeout(() => {
          setLoading(false);
        }, 1000);
        return () => clearTimeout(timeoutId);
      }, [isTransit]);

    return (
        <>
            {loading ? (
                <div className="transition" >
                    <div class="spinner-container">
                        <div class="spinner"></div>
                    </div>
                </div>
            ) : (null)
            }
        </>
    )
}