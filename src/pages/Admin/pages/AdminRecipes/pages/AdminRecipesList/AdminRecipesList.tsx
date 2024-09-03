import styles from "./AdminRecipesList.module.scss";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useFetchRecipes } from '../../../../../../hooks';
import { recipesState } from '../../../../../../state';
import { ObjectId } from '../../../../../../types';
import { deleteRecipe as deleteR } from "../../../../../../apis";

function AdminRecipesList() {
  useFetchRecipes();
  const [recipes, setRecipes] = useRecoilState(recipesState);

  async function deleteRecipe(_id: ObjectId) {
    await deleteR(_id);
    setRecipes(recipes.filter((r) => r._id !== _id));
  }

  return (
    <ul className={styles.list}>
      {recipes.length
        ? recipes.map((r) => (
            <li
              key={r._id}
              className={`d-flex align-items-center ${styles.li}`}
            >
              <span className="flex-fill">{r.title}</span>
              <NavLink to={`../edit/${r._id}`}>
                <button className="btn btn-primary mr-15">Editer</button>
              </NavLink>
              <button
                onClick={() => deleteRecipe(r._id)}
                className="btn btn-danger"
              >
                Supprimer
              </button>
            </li>
          ))
        : null}
    </ul>
  );
}

export default AdminRecipesList;