import {Button} from "@/components/twc-ui/button";
import {Pdf02Icon} from "@hugeicons/core-free-icons";
import { useState } from "react";

export const Demo = () => {
  const [isLoading, setIsLoading] = useState(false)

  const showLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }


  return (
    <Button loading={isLoading} variant="outline" size="auto" icon={Pdf02Icon} onClick={showLoading} title="Create PDF"/>
  )


}
