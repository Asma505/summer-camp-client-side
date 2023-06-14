import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';

const useMyClass = () => {
    const {user} = useContext(AuthContext);    
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: mycourse = []} = useQuery({
        queryKey: ['course', user?.email],
        enabled: !!user?.email,
        queryFn: async () =>{
            const res = await axiosSecure(`/mycourse?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
      })
      return [mycourse, refetch];
};

export default useMyClass;