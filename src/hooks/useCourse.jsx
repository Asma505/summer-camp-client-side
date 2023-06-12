import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCourse = () => {
    const {user} = useContext(AuthContext);    
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: course = []} = useQuery({
        queryKey: ['course', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure(`/course?email=${user.email}`)
            console.log('res from axios', res)
            return res.data;
        },
      })
      return [course, refetch];
    
};

export default useCourse;