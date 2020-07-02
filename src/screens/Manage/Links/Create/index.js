import React from "react";

import Layout from '../../../Layouts/Manage';

const Create = () => {
  return (
    <Layout>
      <h1>Create Link</h1>
      <div>

        <form>
          <div className="form-group">
            <label>Label</label>
            <input type="text" className="form-control" placeholder="Label" />
          </div>
          <div className="form-group">
            <label>Url</label>
            <input type="text" className="form-control" placeholder="Url" />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input type="checkbox" name="isSocial" />
              <span className="form-check-sign"></span>
              Is Social
            </label>
          </div>
          <div>
            <button type="submit" className="btn btn-primary btn-round">Login</button>
          </div>
        </form>

      </div>
    </Layout>
  );
};

export default Create;
