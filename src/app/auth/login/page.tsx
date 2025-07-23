import {Button, Flex} from "@radix-ui/themes";
import { BookmarkIcon } from "@radix-ui/react-icons";

function LoginPage() {
  return (
    <div>LoginPage
        
   <Flex gap="2" align="center">
     <Button size="1" color="red" variant="soft" >
        <BookmarkIcon width="16" height="16"/> Login in
     </Button>
     <Button size="1" variant="solid" color="green">
        Sing in
     </Button>

   </Flex>
    
 


    </div>
  )
}

export default LoginPage