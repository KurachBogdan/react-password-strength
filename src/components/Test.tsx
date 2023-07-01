import './Test.scss'

type Props = {}

const Test = (props: Props) => {
    return (
        <form action="" className="form_main">
            <div className="input_container">
                <input
                    type="password"
                    className="input_field"
                    id="password"
                    placeholder="Password"
                />
            </div>
        </form>
    )
}

export default Test
