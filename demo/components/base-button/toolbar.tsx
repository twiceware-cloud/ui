import { Button } from "@/components/twc-ui/button";
import { Toolbar } from '@/components/twc-ui/toolbar'
import { Contact01Icon, Delete02Icon } from "@hugeicons/core-free-icons";


export const Demo = () => {
    return (
      <Toolbar>
        <Button variant="toolbar-default" size="auto" icon={Contact01Icon} title="Edit contact" />
        <Button variant="toolbar" size="icon" icon={Delete02Icon} title="Delete Contact" />
      </Toolbar>
    )


}
