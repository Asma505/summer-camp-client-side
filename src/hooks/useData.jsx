import { useQuery } from '@tanstack/react-query';

const useData = () => {   

    const { data: details = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['details'],        
        queryFn: async()=>{
            const res = await fetch('https://summer-camp-school-server-rho-sandy.vercel.app/details');
            return res.json();
        }
      })
      console.log(details);
      return [details, loading, refetch];
};

export default useData;