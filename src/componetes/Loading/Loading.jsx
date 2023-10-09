import { Skeleton } from "@chakra-ui/react"

export const LoadingPage = () =>{
    return(
        <>
        <Skeleton variant="circular" width="100%" height="45px" marginBottom={5} />
        <Skeleton variant="rectangular" width="90%" height="150" margin="0 auto" marginBottom={5} />
        <Skeleton variant="rectangular" width="90%" height="40px" margin="0 auto" marginBottom={5} />
        <Skeleton variant="rectangular" width="90%" height="5px" margin="0 auto" marginBottom={5} />
        <Skeleton variant="rectangular" width="90%" height="120px" margin="0 auto" marginBottom={5} />
        <Skeleton variant="rectangular" width="90%" height="140px" margin="0 auto" marginBottom={5} />
        <Skeleton variant="rectangular" width="90%" height="120px" margin="0 auto" marginBottom={5} />
      </>
    )
}