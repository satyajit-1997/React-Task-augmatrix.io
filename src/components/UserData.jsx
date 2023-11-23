const UserData = ({users})=>{
    return(
        <>
        {
            users.map((currentUser)=>{
                const{id,employee_name,employee_salary,employee_age,profile_image} = currentUser;
                return(
                    <tr key={id}>
                    <td>{id}</td>
                    <td>{employee_name}</td>
                    <td>{employee_salary}</td>
                    <td>{employee_age}</td>
                    <td>{profile_image}</td>
                    </tr>
                )
            })
        }

        </>
    )
}

export default UserData;