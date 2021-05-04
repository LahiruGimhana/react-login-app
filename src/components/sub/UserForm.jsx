import React from 'react'

function UserForm() {
    return (
        <div>
            <form>
                    <div class="input-group mb-3">
                        <span class="input-group-addon m-1">First Name</span>
                        <input id="msg" type="text" class="form-control" name="msg" placeholder=" First Name"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-addon m-1">Last Name</span>
                        <input id="msg" type="text" class="form-control" name="msg" placeholder="Last Name"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-addon m-1">City</span>
                        <input id="msg" type="text" class="form-control" name="msg" placeholder="City"/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-addon m-1">Id</span>
                        <input id="msg" type="text" class="form-control" name="msg" placeholder="Id"/>
                    </div>
                    <button className="btn btn-primary m-2" type="submit">Submit</button>
                    <button className="btn btn-primary m-2" type="reset">Reset</button>
                </form>
        </div>
    )
}

export default UserForm
