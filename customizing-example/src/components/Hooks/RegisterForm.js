export default function RegisterForm() {
    const [form, setForm] = useState({
        firstName: 'Sourya',
        lastName: 'Bhattacharya',
        email: 'sourya@somemail.com'
    });

    return (
        <div>
            <label>First name:
            <input value={form.firstName} onChange={e => {setForm({...form, lastName: e.target.value});}} />
            </label>
            
                <p>
                    {form.firstName}{' '}
                    {form.lastName}{' '}
                    ({form.email})
                </p>
           
        </div>
    );
};